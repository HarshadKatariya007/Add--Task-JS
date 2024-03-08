

let Data =[];
const task_lop = () =>
{
    let task_data = document.querySelector("#task_menu_data").innerHTML = ""

    for(let i=0; i<Data.length; i++)
    {
        let Data_ele = document.createElement("h6");
        Data_ele.innerHTML=Data[i].task_1;

        let Delete_ele = document.createElement("button");
        Delete_ele.innerHTML="Delete";

        Delete_ele.addEventListener("click",() =>
        {   
            Data.splice(i,1);
            task_lop();

            Toastify(
                {
                    text: "Successfully Task Delete",
                    duration: 2000,
                    newWindow: true,
                    gravity: "top", // `top` or `bottom`
                    position: "center", // `left`, `center` or `right`
                    stopOnFocus: true, // Prevents dismissing of toast on hover
                    style: {
                      background: "#000000",
                      color:"#5bf700ff",
                      fontWeight:"700", 
                    },
                }
               ).showToast();
        })

        

        Delete_ele.style.backgroundColor="#FF0000";
        Delete_ele.style.color="#FFFFFF";
        Delete_ele.style.padding="1px 10px";
        Delete_ele.style.border="0px";
        Delete_ele.style.borderRadius="6px";
        Delete_ele.style.marginTop="5px";
        Delete_ele.style.boxShadow="0 0 5px 2px #FFFFFF";

        let Div = document.createElement("div");

        Div.append(Data_ele,Delete_ele)
        document.querySelector("#task_menu_data").append(Div);
        Data_ele.style.backgroundColor="#FFFFFF";
        Data_ele.style.marginTop="10px";
        Data_ele.style.padding="6px";
        Data_ele.style.borderRadius="3px"
        Data_ele.style.fontFamily="monospace";
        Data_ele.style.fontWeight="600";
        Data_ele.style.wordWrap="break-word";
    }
}

const DuplicateTask = (task_1) =>
{
    for(let i=0; i<Data.length;i++)
    {
        if(Data[i].task_1===task_1)
        {
            return true;
        }
    }
    return false;   
}

const task = (e) =>
{
    e.preventDefault();

    let task_1 = document.querySelector("#task_data").value;

    if(task_1 =="")
    {
        Toastify(
            {
                text: "Plese Enter Task ",
                duration: 2000,
                newWindow: true,
                close:true,
                gravity: "top", // `top` or `bottom`
                position: "center", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "#000000",
                  color:"#FFFFFF",
                  fontWeight:"700", 
                },
            }
           ).showToast()
           return;
    }
    

    if(DuplicateTask(task_1))
    {
        Toastify(
            {
                text: "Task Is Already Add Remove First After Add Task",
                duration: 2000,
                newWindow: true,
                close:true,
                gravity: "top", // `top` or `bottom`
                position: "center", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "#000000",
                  fontWeight:"700", 
                }
            }
           ).showToast()

           return; 
    }
    else
    {
        Toastify(
            {
                text: "Task Successfully Add",
                duration: 2000,
                newWindow: true,
                gravity: "top", // `top` or `bottom`
                position: "center", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "#000000",
                  color:"#5bf700ff",
                  fontWeight:"700", 
                },
            }
           ).showToast()
    }
    
    let obj =
    {
        task_1 : task_1,
    };

    Data.push(obj);
    task_lop()

}



document.querySelector("form").addEventListener("submit",task)