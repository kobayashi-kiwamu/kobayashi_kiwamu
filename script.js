'use strict'
// 1行目に記載している 'use strict' は削除しないでください

// 正解不正解を記憶する配列
let counter = 0 //問題数
const arrayOfNum1 = [] //1つ目の数字
const arrayOfNum2 = [] //2つ目の数字
const arrayOfCorrectAns = [] //正しい回答
const arrayOfAns = [] //入力した回答
const arrayOfCorOrIncor = []//正解または不正解　boolean

// それぞれのパラメータを格納する変数
const body =document.querySelector("body")
const btn = document.querySelector("button")
let num1Element = document.getElementsByClassName("num1")[0] //num1というクラスの要素の0番目
let num2Element = document.getElementsByClassName("num2")[0] //num2というクラスの要素の0番目
let input = document.querySelector("input") //inputという要素
let kaito =document.getElementsByClassName("kaito")[0]//kaitoという要素
let result = document.getElementsByClassName("result")[0]//結果の履歴を残すための要素

// 初期の背景を設定する
document.body.style.backgroundImage = 'url(background.jpg)'

// 初期値を設定しておく
  let num1 = Math.floor(Math.random() * 10 + 1) //1つ目の数字を作る
  let num2 = Math.floor(Math.random() * 10 + 1) //2つ目の数字を作る
  let ans = num1 + num2 //答えを作る ローカルスコープで作ったらダメ？
  num1Element.innerText = num1 //num1というクラスの問題文の1つ目の数字に代入する
  num2Element.innerText = num2 //num1というクラスの問題文の2つ目の数字に代入する

// 入力を完了した後に行う処理　判定後表示を切り替える
btn.addEventListener("click",()=>{
  // inputの数値が合っているかを確認する
  if (input.value == ans) {
    kaito.innerHTML = "正解です"
    arrayOfCorOrIncor.push("〇")
  } else {
    kaito.innerHTML = "間違いです 答えは"+ans+"です"
    arrayOfCorOrIncor.push("×")
  }

  // 結果を記録する配列を更新する
  counter += 1;
  arrayOfNum1.push(num1);
  arrayOfNum2.push(num2);
  arrayOfCorrectAns.push(num1 + num2);
  arrayOfAns.push(input.value);

  // 次の計算問題に更新する
  num1 = Math.floor(Math.random() * 10 + 1) //グローバルスコープで作ったnum1を入れ替える
  num2 = Math.floor(Math.random() * 10 + 1) //グローバルスコープで作ったnum2を入れ替える
  ans = num1 + num2 //グローバルスコープで作ったansを入れ替える
  num1Element.innerText = num1 //num1というクラスの問題文の1つ目の数字に代入する
  num2Element.innerText = num2 //num1というクラスの問題文の2つ目の数字に代入する

  // inputの数値をクリアする
  input.value=""

  // 結果の履歴を表示する要素resultを更新する
  // 配列そのものを返してしまうので単純追加しないように毎回ゼロリセット
  result.innerText=""
  arrayOfCorOrIncor.forEach(elemnt =>result.append(elemnt))
  // for(let i=0 ; i< arrayOfCorOrIncor.length;i++){
  //   result.append(arrayOfCorOrIncor[i])
  // }

  // 3回連続で正解したらピカチュウが出てくる
  if(result.innerText === "〇〇〇"){
    document.body.style.backgroundImage = 'url(pikatyu.jpg)'
  }
})