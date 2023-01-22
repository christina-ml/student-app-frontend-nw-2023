import "./Container.scss";

const Container = ({ center, children }) => {
    // array of class names
    const classNamesArr = ['Container'];

    if (center){
        classNamesArr.push('Container--center');
    }

    return (
        <div className={classNamesArr.join(" ")}>
            {children}
        </div>
    )
}

export default Container;