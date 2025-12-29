const loading=document.querySelector(".loading");
window.addEventListener("load", ()=>{
  loading.classList.add("loading-hidden")
})
useEffect(() => {
  fetchData().finally(() => setLoading(false));
}, []);
