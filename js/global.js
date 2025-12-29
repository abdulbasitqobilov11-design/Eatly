const loading=document.querySelector(".loading");
window.addEventListener("load", ()=>{
  loading.classList.add("loading-hidden")
})
await fetchData();
setLoading(false);
