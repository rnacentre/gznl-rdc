---
layout: post
title:  "pdb"
date:   2022-04-18T14:25:52-05:00
author: Chichau Miao
categories: ribozyme
---


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
 
    body{
      margin: 0;
      padding: 0;
    }
 
    svg{
      margin-left: 30px;
      margin-top: 30px;
      width: 600px;
      height: 300px;
      border: 1px solid red;
    }
  </style>
</head>
<body>
  <svg  id="svg" xmlns="http://www.w3.org/2000/svg">
    <rect id="rect" x="100" y="100" width="200" height="100" style="stroke:black;fill:none;stroke-width:1px" transform="translate(0,0),scale(1)"></rect>
  </svg>
 
  <script>
    
    var svg = document.getElementById("svg");
    var rect = document.getElementById("rect");
 
    svg.ontouchstart = function(e){
      // 阻止浏览器的默认行为，一般用于单指滑动时，整个页面跟着滑动，双指放大时，整个背景也跟着放大
      e.preventDefault();
 
      if(e.touches.length == 1){
        // 一个手指，拖动
        // 记录手指按下的位置
        let startX = e.touches[0].clientX;
        let startY = e.touches[0].clientY;
  
        // 获取rect的transform属性
        let transform = rect.getAttribute("transform");
        // 获取transform属性的内部的值
        let result = /translate\(([0-9\.-]+),([0-9\.-]+)\),scale\(([0-9\.-]+)\)/.exec(transform);
        let x = result[1];
        let y = result[2];
        let z = result[3];
        
        svg.ontouchmove = function(e){
          // 记录每次移动后手指的位置
          let endX = e.touches[0].clientX;
          let endY = e.touches[0].clientY;
          // 计算移动差值
          let moveX = endX - startX;
          let moveY = endY - startY;
          // 设置rect的transform的值
          rect.setAttribute("transform","translate(" + (parseFloat(x)+moveX) + "," + (parseFloat(y)+moveY) + "),scale(" + z + ")")
        }
 
      }else if(e.touches.length == 2){
        // 2个手指放大
        let start = e.touches;
        // 计算双指间的直线距离，勾股定理
        let distanceStartX = start[0].clientX - start[1].clientX;
        let distanceStartY = start[0].clientY - start[1].clientY;
        let distanceStart = Math.sqrt(distanceStartX*distanceStartX + distanceStartY*distanceStartY);
        
        // 计算2点之间的重点，就是放大的中心点(放大时，中心点位置不变)
        let px = (start[0].clientX + start[1].clientX) / 2 - 30;
        let py = (start[0].clientY + start[1].clientY) / 2 - 30;
        
        // 获取rect的transform属性
        let transform = rect.getAttribute("transform");
        let regex = /translate\(([0-9\.-]+),([0-9\.-]+)\),scale\(([0-9\.-]+)\)/.exec(transform);
        // 获取属性的各个参数
        let x = parseFloat(regex[1]);
        let y = parseFloat(regex[2]);
        let z = parseFloat(regex[3]);
        
        svg.ontouchmove = function(e){
          // 记录每次移动后手指的位置
          let end = e.touches;
          
          // 计算每次移动后的直线距离，也是勾股定理
          let distanceEndX = end[0].clientX - end[1].clientX;
          let distanceEndY = end[0].clientY - end[1].clientY;
          let distanceEnd = Math.sqrt(distanceEndX*distanceEndX + distanceEndY*distanceEndY);
          // 计算第二次的距离与第一次的比值，这个数即为放大倍数
          let s = distanceEnd / distanceStart;
          
          // 核心，下面讲解。
          let endX = x + (px - x) * (1 - s);
          let endY = y + (py - y) * (1 - s);
          let endZ = z * s;
          
          // 设置rect的transform的值
          rect.setAttribute("transform","translate(" + endX + "," + endY + "),scale(" + endZ + ")")
        }
 
      }
 
 
    }
  </script>
 
</body>
</html>
