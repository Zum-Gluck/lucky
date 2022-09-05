window.onload = () => {
  let box = document.querySelector(".box");
  let lis = [];
  // 获取所有奖项
  for (let i = 0; i < box.children.length; i++) {
    if (i != 4) {
      lis.push(box.children[i])
    }
  }
  // 抽奖按钮
  let btn = box.children[4];
  let flag = true;
  let firstFlag = true
  btn.onclick = async function () {
    if (!flag) return alert('请稍等')
    flag = false
    for (var i = 0; i < lis.length; i++) {
      lis[i].className = ''
    }
    let randomNum = Math.floor(Math.random() * 8)
    randomLottery(randomNum).then(res => {
      flag = true;
      let arr = ['袁震', '王柯', '涛哥', '谢泽林', '冯崛', '陈爽', '褚高骏', '窦志豪']
      setTimeout(() => {
        if (randomNum === 6) {
          alert(`今天的幸运儿是${arr[randomNum]}`)
        } else {
          alert(`今天的幸运儿是${arr[randomNum]}`)
        }
      }, 1000);
    })
  }

  function randomLottery(num) { 
    if (firstFlag) {
      ArraySorft()
    }
    return new Promise(resolve => {
      let i = -1;
      let timer = setInterval(() => {
        setTimeout(function () {
          if (i == num) {
            clearInterval(timer)
            resolve(1)
          }
        }, 3000)
        if (i == 7) {
          lis[i].className = '';
          i = -1
          return
        };
        i++
        lis[i - 1] ? lis[i - 1].className = '' : false
        lis[i].className = 'current'
      }, 200);
    })
  }

  function ArraySorft() {
    firstFlag = false
    let three = lis.splice(3, 1)  // 0 1 2 4 5 6 7 
    let four_seven = lis.splice(4, 3) // 
    four_seven = four_seven.reverse()
    four_seven.forEach(item => {
      lis.push(item)
    })
    lis.push(three[0])
  }
}