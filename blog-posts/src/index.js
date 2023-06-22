import React from 'react';
import ReactDOM from 'react-dom';
import Profile1 from './images/pic1.jpg';
import Profile2 from './images/pic2.jpg';
import Profile3 from './images/pic3.jpg';
import SingleComment from "./SingleComment";
import UserCard from "./UserCard";

const App = () => {
    return(
        <div className='ui comments'>
            <UserCard>
                <SingleComment
                    name='Ethan baby'
                    date='Today at 5pm'
                    text='It is amazing'
                    picture={Profile1}
                />
            </UserCard>
            <UserCard>
                <SingleComment
                    name='Ethan toddler'
                    date='Today at 6pm'
                    text='Great Job'
                    picture={Profile2}
                />
            </UserCard>
            <UserCard>
                <SingleComment
                    name='Ethan getting bigger'
                    date='Today at 7pm'
                    text='Thanks'
                    picture={Profile3}
                />
            </UserCard>

        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)