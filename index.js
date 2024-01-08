let boxes = document.querySelectorAll(".btn");
let headwin = document.querySelector(".win")
// let headwin = document.getElementsByTagName("h2")
let resetbtn = document.querySelector(".reset")

let turn0 = true;

let winpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

const showiner = (winner)=>{
        headwin.innerText = `Congratulation winner is ${winner} `
    }
    
const disablebtn = ()=>{
    for (riyabox of boxes){
        riyabox.disabled = true
        
    }
}

const toreset = ()=>{
// let turn0 =    true;

if (turn0) {
    turn0 = false;
}else{
    turn0 = true;
}
    for (riyabox of boxes){
        riyabox.disabled = false 
        riyabox.innerText = ""
    }
    headwin.innerText =""
}

    boxes.forEach((btn)=>{
        btn.addEventListener("click",((event)=>{
            if(turn0===true){
                btn.innerHTML= "o"
                turn0 = false
            }else{
                btn.innerHTML= "x"
                turn0 = true
            }
            btn.disabled = true
            
            for(let pattern of winpattern){
                // console.log( pattern[0] , pattern[1] , pattern[2] )
                // console.log( boxes[pattern[0]] , boxes[pattern[1]] , boxes[pattern[2]] )
                // let pos1val = box[pattern[0]].innerHTML
                // let pos2val = box[pattern[1]].innerHTML
                // let pos3val = box[pattern[2]].innerHTML
                
                let pos1val = boxes[pattern[0]].innerText;
                let pos2val = boxes[pattern[1]].innerText;
                let pos3val = boxes[pattern[2]].innerText;
                
                if(pos1val !== "" && pos2val !== "" && pos3val !== "" ){
                    if(pos1val === pos2val && pos2val === pos3val){
                        
                        disablebtn()
                        showiner(pos1val)
                        // headwin.innerText = `Congratulations winner is ${pos1val}`;
                }
            }            
        }

        }))

})

resetbtn.addEventListener("click",toreset);