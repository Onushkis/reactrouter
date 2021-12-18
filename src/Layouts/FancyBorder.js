const FancyBorder = (props) => {
    return ( 
      <div style={styles}>{props.children}</div>  
     );
}
 const styles ={
     border: "solid 1px lightGrey",
 }
export default FancyBorder;