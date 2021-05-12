// image的各种处理

// 检测浏览器是否支持webp格式的图片
export const isWebPBrowser = () => {
  try {
    return (
      document
        .createElement("canvas")
        .toDataURL("image/webp")
        .indexOf("data:image/webp") == 0
    );
  } catch (err) {
    return false;
  }
};

export const webpToOtherType = (extension = 'png') => {
  if (!isWebPBrowser()) {
    const webpDoms = document.querySelectorAll(".webp-dom");
    webpDoms.forEach((item) => {
      if (item.tagName === "IMG") {
        const url = item.getAttribute("src");
        item.src = url.replace(".webp", "." + extension);
      } else {
        const url = window
          .getComputedStyle(item, null)
          .getPropertyValue("background-image");
        if (!url) return;
        item.style.backgroundImage = url.replace(".webp", ".png");
      }
    });
  }
}
