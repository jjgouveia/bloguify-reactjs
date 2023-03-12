const styles = {

    modalContainer: {
        display: 'flex',
        flexWrap: 'wrap',
    },

    modal: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 360,
        bgcolor: 'background.paper',
        border: '1px solid #5b5b5b',
        boxShadow: 24,
        p: 4,
        padding: '.5rem 1rem',
    },

    container: {
        display: 'flex',
        justifyContent: 'space-between',
    },

    contentContainer: {
        maxHeight: '350px',
        overflowY: 'scroll',
    },

    commentIcon: {
        width: "38px",
        height: "38px",
    },

    icon: {
        width: "48px",
        height: "48px"
    }
};

export default styles;
