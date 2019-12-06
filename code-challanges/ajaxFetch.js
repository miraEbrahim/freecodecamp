var test_url = "https://api.taggstar.com/api/v2/key/very/products?ids=PKJMN,PP7FX,PGYRT,NACQM,PGJT9,PVGVJ&taggExperienceId=treatment&taggFakeData=CAP";

// Please perform an AJAX request for the URL inside test_url variable and list all messages (socialProof[i].messages[0].message) under the div#list element when the "List Messages" button is clicked. You can browse the url from your browser to see the JSON response.

const btnList = document.getElementById('btnList');
btnList.addEventListener('click', fetchMessages);
    
function fetchMessages(){
    fetch(`${test_url}`)
        .then(response => response.json())
        .then(msgs => {
         
          console.log("Fetch return",msgs)
            let output = '<h2>Lists of Messages</h2>';
            output += '<ul>';
            msgs.socialProof.forEach(function(msg) {
              console.log("Loop  return",msg)
                output += `
                    <li>
                        ${msg.messages[0].message}
                    </li>
                `;
            });
            output += '</ul>'
            document.getElementById("list").innerHTML = output;
        });
}