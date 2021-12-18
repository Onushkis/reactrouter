
const Flexbox = ({justify = "space-between", children}) => {
    
    const styles = {
        display: "flex",
        justifyContent: `${justify}`,
   };
return <div style={styles}>{children}</div>;
};
export default Flexbox;