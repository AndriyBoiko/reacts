const Char = ({char:{id, name, location:{url}}}) => {
    return (
        <div>
            {id} ---{name}--{url}
            <hr/>
        </div>
    );
};


export {
    Char
};