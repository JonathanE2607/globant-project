
const TextUI = ({content, styles}:{content:string, styles:string}) => {
    return (
       <p className={`font-Roboto ${styles}`}>{content}</p>
    );
   }
   
   export default TextUI;