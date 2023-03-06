import "./style.css";
import {amiibos} from "./amiibos.js";
import {hist} from "./hist.js"

const DOMSelectors = {
  supermario: document.getElementById("mario"),
  zelda: document.getElementById("zelda"),
  kirby: document.getElementById("kirby"),
  ac: document.getElementById("ac"),
  metroid: document.getElementById("metroid"),
  splatoon: document.getElementById("splatoon"),
  container: document.getElementById("container"),
};

DOMSelectors.supermario.addEventListener("click",
  function(){
    let og = amiibos.supermario 
    let h = hist.supermario
    if (h.length == og.length) h=[]
    og = og.filter(amiibo => h.includes(amiibo) == false)
    let choice = og[Math.floor(Math.random()*og.length)]
    DOMSelectors.container.innerHTML=""
    DOMSelectors.container.insertAdjacentHTML("beforeend",
    `<img src="${choice}" alt="" style="width:250px">`)
    h.push(choice)
  })

  DOMSelectors.zelda.addEventListener("click",
  function(){
    let og = amiibos.zelda 
    let h = hist.zelda
    if (h.length == og.length) h=[]
    DOMSelectors.container.innerHTML=""
    og = og.filter(amiibo => h.includes(amiibo) == false)
    console.log(og)
    let choice = og[Math.floor(Math.random()*og.length)]
    console.log(choice)
    DOMSelectors.container.insertAdjacentHTML("beforeend",
    `<img src="${choice}" alt="" style="width:250px">`)
    h.push(choice)
  })

  DOMSelectors.kirby.addEventListener("click",
  function(){
    let og = amiibos.kirby 
    let h = hist.kirby
    if (h.length == og.length) h=[]
    DOMSelectors.container.innerHTML=""
    og = og.filter(amiibo => h.includes(amiibo) == false)
    console.log(og)
    let choice = og[Math.floor(Math.random()*og.length)]
    console.log(choice)
    DOMSelectors.container.insertAdjacentHTML("beforeend",
    `<img src="${choice}" alt="" style="width:250px">`)
    h.push(choice)
  })

  DOMSelectors.ac.addEventListener("click",
  function(){
    let og = amiibos.ac 
    let h = hist.ac
    if (h.length == og.length) h=[]
    DOMSelectors.container.innerHTML=""
    og = og.filter(amiibo => h.includes(amiibo) == false)
    console.log(og)
    let choice = og[Math.floor(Math.random()*og.length)]
    console.log(choice)
    DOMSelectors.container.insertAdjacentHTML("beforeend",
    `<img src="${choice}" alt="" style="width:250px">`)
    h.push(choice)
  })

  DOMSelectors.metroid.addEventListener("click",
  function(){
    let og = amiibos.metroid 
    let h = hist.metroid
    if (h.length == og.length) h=[]
    DOMSelectors.container.innerHTML=""
    og = og.filter(amiibo => h.includes(amiibo) == false)
    console.log(og)
    let choice = og[Math.floor(Math.random()*og.length)]
    console.log(choice)
    DOMSelectors.container.insertAdjacentHTML("beforeend",
    `<img src="${choice}" alt="">`)
    h.push(choice)
  })

  DOMSelectors.splatoon.addEventListener("click",
  function(){
    let og = amiibos.splatoon 
    let h = hist.splatoon
    if (h.length == og.length) h=[]
    DOMSelectors.container.innerHTML=""
    og = og.filter(amiibo => h.includes(amiibo) == false)
    console.log(og)
    let choice = og[Math.floor(Math.random()*og.length)]
    console.log(choice)
    DOMSelectors.container.insertAdjacentHTML("beforeend",
    `<img src="${choice}" alt="" style="width:250px">`)
    h.push(choice)
  })