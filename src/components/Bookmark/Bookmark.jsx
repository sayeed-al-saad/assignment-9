
import PropTypes from 'prop-types';

const Bookmark = (({bookmark}) => {

    const {recipe_name, preparing_time, calories} = bookmark;
    return (
        <div className='py-4 flex '>
            <div className='flex justify-between items-center'>
                <h4>{recipe_name}</h4>
                <p >{preparing_time}</p>
                <p>{calories}</p> 
            </div>
            <button className='btn btn-success '>Preparing</button>
        </div>
    );
});

Bookmark.propTypes = {
    bookmark: PropTypes.object
};

export default Bookmark;