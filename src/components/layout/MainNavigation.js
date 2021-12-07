import { Link } from 'react-router-dom';

function MainNavigation () {
    return <header>
<div>

    <nav>
        <ul>
            <li> <Link to='/'>All Meetups</Link> </li>
            <li> <Link to='/new-meetup'>New Meetups</Link> </li>
            <li> <Link to='/favorites'>Favorites</Link> </li>
        </ul>
    </nav>
</div>


        </header>
}

export default MainNavigation;