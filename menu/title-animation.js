var animation = ["㋐ 𝗠𝗔𝗜𝗡 𝗣𝗔𝗚𝗘 ㋐","㋑ 𝗠𝗔𝗜𝗡 𝗣𝗔𝗚𝗘 ㋑","㋒ 𝗠𝗔𝗜𝗡 𝗣𝗔𝗚𝗘 ㋒","㋓ 𝗠𝗔𝗜𝗡 𝗣𝗔𝗚𝗘 ㋓","㋔ 𝗠𝗔𝗜𝗡 𝗣𝗔𝗚𝗘 ㋔","㋕ 𝗠𝗔𝗜𝗡 𝗣𝗔𝗚𝗘 ㋕","㋖ 𝗠𝗔𝗜𝗡 𝗣𝗔𝗚𝗘 ㋖","㋗ 𝗠𝗔𝗜𝗡 𝗣𝗔𝗚𝗘 ㋗","㋘ 𝗠𝗔𝗜𝗡 𝗣𝗔𝗚𝗘 ㋘","㋙ 𝗠𝗔𝗜𝗡 𝗣𝗔𝗚𝗘 ㋙","㋚ 𝗠𝗔𝗜𝗡 𝗣𝗔𝗚𝗘 ㋚","㋛ 𝗠𝗔𝗜𝗡 𝗣𝗔𝗚𝗘 ㋛","㋜ 𝗠𝗔𝗜𝗡 𝗣𝗔𝗚𝗘 ㋜","㋝ 𝗠𝗔𝗜𝗡 𝗣𝗔𝗚𝗘 ㋝","㋞ 𝗠𝗔𝗜𝗡 𝗣𝗔𝗚𝗘 ㋞","㋟ 𝗠𝗔𝗜𝗡 𝗣𝗔𝗚𝗘 ㋟","㋠ 𝗠𝗔𝗜𝗡 𝗣𝗔𝗚𝗘 ㋠","㋡ 𝗠𝗔𝗜𝗡 𝗣𝗔𝗚𝗘 ㋡","㋢ 𝗠𝗔𝗜𝗡 𝗣𝗔𝗚𝗘 ㋢","㋣ 𝗠𝗔𝗜𝗡 𝗣𝗔𝗚𝗘 ㋣",];
var l = 0;
setInterval(function(){
    if (l >= animation.length) {
      l = 0;
    }
    document.title = animation[l];
    l += 1;
  }, 500);
