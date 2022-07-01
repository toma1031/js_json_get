// 例えばフィールドcompanyの2つの目のフィールド（key2）catchPhraseを表示させたくない時は
// IFでkey2がcatchPhraseの時は空のReturnをしてあげれば
// Continueと同じようにスキップすることができる
// 参考文献
// https://kojimanotech.com/2021/07/05/326/

let url = 'https://jsonplaceholder.typicode.com/users/1';

fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      let contents = '';
      Object.keys(data).map((key) => {
        let value = data[key];
        if (typeof(value) != "object") {
          contents += `<div>${key}:${value}</div>`;
        }
        else {
          Object.keys(value).map((key2) => {
            let value2 = value[key2];
            if (typeof(value2) != "object")
            {
              if (key2 === "catchPhrase") {
                return
              }
              return contents += `<div>${key2}: ${value2}</div>`;
            }
            else
            {
              Object.keys(value2).map((key3) => {
                let value3 = value2[key3];
                return contents += `<div>${key3}: ${value3}</div>`;
              });
            }
          });
        }
      });
      document.getElementById("root").innerHTML = contents;
    });



