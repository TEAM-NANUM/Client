import React, {
  useMemo,
  useCallback,
  memo,
  useState,
  useRef,
  useEffect,
} from "react";
import styles from "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // react-quill과 css파일 import 하기
import axios from "axios";

const SellerProductAddForm = memo(
  ({ setAnswer, PROXY, quillRef, api, htmlContent, setHtmlContent }) => {
    const dataURLtoFile = (dataurl, fileName) => {
      var arr = dataurl.split(","),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);

      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }

      return new File([u8arr], fileName, { type: mime });
    };

    const [img_url, setImg_Url] = useState();
    const onHTML = (e) => {
      setHtmlContent(e);

      let content_data = htmlContent.split('<img src="');
      let answer_arr;

      answer_arr = content_data.map((item, idx) => {
        let base64_img_data;
        let change_idx;

        if (item.slice(0, 4) === "data") {
          base64_img_data = item.slice(
            item.indexOf("data"),
            item.indexOf(">") - 1
          );
          let file = dataURLtoFile(base64_img_data, "product_content_img");

          axios
            .post(
              `${PROXY}/api/presigned`,
              {
                image_list: [
                  {
                    file_name: file.name,
                    file_type: file.type,
                  },
                ],
              },
              {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem(
                    "access_token"
                  )}`,
                },
              }
            )
            .then((res) => {
              axios
                .put(res.data.URLlist[0].presigned_url, file, {
                  headers: {
                    "Content-Type": file.type, // 파일의 MIME 타입 설정
                  },
                })
                .then((res) => console.log(res))
                .catch((err) => console.log(err));

              setImg_Url(res.data.URLlist[0].image_url);
              // console.log((item.slice(item.indexOf("data"), item.indexOf(">") - 1)))
            })
            .catch((err) => console.log(err));

          change_idx = '<img src="' + item.replace(base64_img_data, img_url);
          return change_idx;
        } else {
          return item;
        }
      });

      setAnswer(answer_arr);
    };

    // 툴바의 사진 아이콘 클릭시 기존에 작동하던 방식 대신에 실행시킬 핸들러를 만들어주자.
    const imageHandler = useCallback(() => {
      const formData = new FormData(); // 이미지를 url로 바꾸기위해 서버로 전달할 폼데이터 만들기

      const input = document.createElement("input"); // input 태그를 동적으로 생성하기
      input.setAttribute("type", "file");
      input.setAttribute("accept", "image/*"); // 이미지 파일만 선택가능하도록 제한
      input.setAttribute("name", "image");
      input.click();

      // 파일 선택창에서 이미지를 선택하면 실행될 콜백 함수 등록
      input.onchange = async () => {
        const file = input.files[0];
        formData.append("image", file); // 위에서 만든 폼데이터에 이미지 추가

        // 폼데이터를 서버에 넘겨 multer로 이미지 URL 받아오기
        const res = await api.uploadImage(formData);
        if (!res.success) {
          alert("이미지 업로드에 실패하였습니다.");
        }
        const url = res.payload.url;
        const quill = quillRef.current.getEditor();
        /* ReactQuill 노드에 대한 Ref가 있어야 메서드들을 호출할 수 있으므로
            useRef()로 ReactQuill에 ref를 걸어주자.
            getEditor() : 편집기를 지원하는 Quill 인스턴스를 반환함
            여기서 만든 인스턴스로 getText()와 같은 메서드를 사용할 수 있다.*/

        const range = quill.getSelection()?.index;
        //getSelection()은 현재 선택된 범위를 리턴한다. 에디터가 포커싱되지 않았다면 null을 반환한다.

        if (typeof range !== "number") return;
        /*range는 0이 될 수도 있으므로 null만 생각하고 !range로 체크하면 잘못 작동할 수 있다.
            따라서 타입이 숫자이지 않을 경우를 체크해 리턴해주었다.*/

        quill.setSelection(range, 1);
        /* 사용자 선택을 지정된 범위로 설정하여 에디터에 포커싱할 수 있다. 
               위치 인덱스와 길이를 넣어주면 된다.*/

        quill.clipboard.dangerouslyPasteHTML(
          range,
          `<img src=${url} alt="image" />`
        );
      }; //주어진 인덱스에 HTML로 작성된 내용물을 에디터에 삽입한다.
    }, [api, quillRef]);

    const modules = useMemo(
      () => ({
        toolbar: [
          [{ font: ["Spoqa Han Sans Neo"] }],
          [{ header: [1, 2, 3, false] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          ["image"],
        ],
        clipboard: {
          // toggle to add extra line breaks when pasting HTML:
          matchVisual: false,
        },
      }),
      [imageHandler]
    );
    return (
      <>
        <ReactQuill
          style={{ width: "100%", zIndex: "0" }}
          ref={quillRef}
          value={htmlContent}
          onChange={onHTML}
          modules={modules}
          theme="snow"
          className={styles.quillEditor}
        />
      </>
    );
  }
);

export default SellerProductAddForm;
