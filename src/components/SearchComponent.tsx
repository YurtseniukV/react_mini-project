import React, {FC} from 'react';

const SearchComponent:FC = () => {

const handleSubmit = () => {}
const handleChange = () =>{}

    return (
        <div className="container right">
            <div className="row">
<section className="col s4 offset-s3">
    <form action="" onSubmit={handleSubmit}>
        <div className="input-field">
            <input type="text" placeholder="search movie" onChange={handleChange}/>
        </div>
    </form>
</section>
            </div>

            </div>
    );
};

export default SearchComponent;