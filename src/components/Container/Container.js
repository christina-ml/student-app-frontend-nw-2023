import "./Container.scss";

const Container = ({ center, children, scroll = true }) => {
    // array of class names
    const classNamesArr = ['Container'];

    if (center){
        classNamesArr.push('Container--center');
    }

    if (scroll){
        classNamesArr.push('Container--scroll');
    }

    return (
        <div className={classNamesArr.join(" ")}>
            {children}
        </div>
    )
}

export default Container;