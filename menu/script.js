var styles = ["boring.css","videoStyle.css","style.css"];
var i = 0;
function styleChange() 
{
  if (i >= styles.length) 
  {
    i = 0;
    document.getElementById("style").href = styles[i];
  } 
  else 
  {
    document.getElementById("style").href = styles[i];
    i += 1;
  }
}
var animation = ["㋐ 𝝡𝝖𝗹𝗡 𝓟𝓐𝗴𝓔 ㋐","㋑ 𝝡𝝖𝗹𝗡 𝓟𝓐𝗴𝓔 ㋑","㋒ 𝝡𝝖𝗹𝗡 𝓟𝓐𝗴𝓔 ㋒","㋓ 𝝡𝝖𝗹𝗡 𝓟𝓐𝗴𝓔 ㋓","㋔ 𝝡𝝖𝗹𝗡 𝓟𝓐𝗴𝓔 ㋔","㋕ 𝝡𝝖𝗹𝗡 𝓟𝓐𝗴𝓔 ㋕","㋖ 𝝡𝝖𝗹𝗡 𝓟𝓐𝗴𝓔 ㋖","㋗ 𝝡𝝖𝗹𝗡 𝓟𝓐𝗴𝓔 ㋗","㋘ 𝝡𝝖𝗹𝗡 𝓟𝓐𝗴𝓔 ㋘","㋙ 𝝡𝝖𝗹𝗡 𝓟𝓐𝗴𝓔 ㋙","㋚ 𝝡𝝖𝗹𝗡 𝓟𝓐𝗴𝓔 ㋚","㋛ 𝝡𝝖𝗹𝗡 𝓟𝓐𝗴𝓔 ㋛","㋜ 𝝡𝝖𝗹𝗡 𝓟𝓐𝗴𝓔 ㋜","㋝ 𝝡𝝖𝗹𝗡 𝓟𝓐𝗴𝓔 ㋝","㋞ 𝝡𝝖𝗹𝗡 𝓟𝓐𝗴𝓔 ㋞","㋟ 𝝡𝝖𝗹𝗡 𝓟𝓐𝗴𝓔 ㋟","㋠ 𝝡𝝖𝗹𝗡 𝓟𝓐𝗴𝓔 ㋠","㋡ 𝝡𝝖𝗹𝗡 𝓟𝓐𝗴𝓔 ㋡","㋢ 𝝡𝝖𝗹𝗡 𝓟𝓐𝗴𝓔 ㋢","㋣ 𝝡𝝖𝗹𝗡 𝓟𝓐𝗴𝓔 ㋣",];
var l = 0;
setInterval(function(){ 
    if (l >= animation.length) {
      l = 0;
    }
    document.title = animation[l];
    l += 1;
  }, 500);