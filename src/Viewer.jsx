const Viewer = ({ operator, result }) => {
    return (
        <div>
            <input readOnly id="operator" value={operator} />
            <input readOnly type="text" id="result" value={result} />
        </div>
    );
};

export default Viewer;
