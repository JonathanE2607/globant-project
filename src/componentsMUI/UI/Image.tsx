const ImageUI = ({source, alternative, sizes, styles}:{source:string, alternative:string, sizes:string, styles:string}) =>{
return(
 <>
 <img src={source} alt={alternative} sizes={sizes} className={styles}></img>
 </>
);
}
export default ImageUI;