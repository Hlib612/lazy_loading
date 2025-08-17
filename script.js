const pictures = document.querySelectorAll(".feed__item img");
console.log(pictures);

const options = {
  threshold: 0.5,
};

const onEntry = (elements, observer) => {
  console.log(elements);
  elements.forEach((element) => {
    // console.log(element);
    // console.log(element.target);
    // console.log(element.target.src);
    // console.log(element.target.dataset.lazy);
  const img = element.target;
    if (element.isIntersecting) {
      img.src = img.dataset.lazy;
      img.classList.add("appear");
      observer.unobserve(img);
    } 
  });
};

const io = new IntersectionObserver(onEntry, options);

pictures.forEach((picture) => io.observe(picture));
