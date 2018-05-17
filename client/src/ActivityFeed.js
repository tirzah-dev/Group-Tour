import React from 'react';
import './views/activity-feed.css';
// import Activity from "./Activity";

function ActivityFeed(props) {
    return (
        //need to figure out how to make this dynamically rendered by what the user enters in the post box area
       <div className="star">
        <div className="html">
            <div className="activity-body">
                <div className="activity-feed-title"><h1 className="activity-feed-title-header">Group Activity Feed</h1></div>
                <section className=".section" >
                    <article className=".article">
                        <figure className="figure">
                            <h2 className="post-title">Title</h2>
                            <p className="post-words">>This is a words the users posts which is optional</p>
                            <i class="far fa-star"></i>
                        </figure>
                        <img className="img" alt src='http://www.prideofmaui.com/blog/wp-content/uploads/2014/09/top-10-places-to-visit-in-hawaii-north-shore-oahu-2.jpg' />
                    </article>
                    
                    <article className="article">
                        <figure className="figure">
                            <h2 className="post-title">title or username</h2>
                            <p className="post-words">>post words</p>
                            <i class="far fa-star"></i>
                        </figure>
                        <img className="img" alt src='http://www.prideofmaui.com/blog/wp-content/uploads/2014/09/top-10-places-to-visit-in-hawaii-na-pali-coast-state-wilderness-park-1.jpg ' />
                    </article>

                    <article className="article">
                        <figure className="figure">
                            <h2 className="post-title">title or username</h2>
                            <p className="post-words">>post</p>
                            <i class="far fa-star"></i>
                        </figure>
                        <img  className="img" alt src='http://www.prideofmaui.com/blog/wp-content/uploads/2014/09/Top-10-Places-to-Visit-Hawaii-Haleakala-02.jpg' />
                    </article>

                    <article className="article">
                        <figure className="figure">
                            <h2 className="post-title">Title or username</h2>
                            <p className="post-words">>Post words</p>
                            <i class="far fa-star"></i>
                        </figure>
                        <img  className="img" alt src='http://www.prideofmaui.com/blog/wp-content/uploads/2014/05/2014-04-22_0006.jpg' />
                    </article>

                    <article className="article">
                        <figure className="figure">
                            <h2 className="post-title">Title or username</h2>
                            <p className="post-words">>post by user</p>
                        </figure>
                        <img className="img" alt src='http://www.prideofmaui.com/blog/wp-content/uploads/2014/09/Top-10-Places-to-Visit-Hawaii-trip-to-lanai-2.jpg' />
                    </article>

                    <article className="article">
                        <figure className="figure">
                            <h2 className="post-title">title or username</h2>
                            <p className="post-words">>post words</p>
                        </figure>
                        <img className="img" alt src='http://www.prideofmaui.com/blog/wp-content/uploads/2014/09/Top-10-Places-to-Visit-Hawaii-volcanoes-national-park.jpg' />
                    </article>

                    <article className="article">
                        <figure className="figure">
                            <h2 className="post-title">title or username</h2>
                            <p className="post-words">>words for post</p>
                        </figure>
                        <img className="img" alt src='http://4.bp.blogspot.com/-T-kC6Hn7AJA/UJqwR0qoX4I/AAAAAAAABEM/fSFuN1eOH3Q/s1600/clubs.jpg' />
                    </article>

                    <article className="article">
                        <figure className="figure">
                            <h2 className="post-title">title or username</h2>
                            <p className="post-words">>post words</p>
                        </figure>
                        <img className="img" alt src='https://alohanarentals.com/wp-content/uploads/2018/05/Kahaluu-Beach-Park-600x394-600x380.jpg' />
                    </article>

                    <article className="article">
                        <figure className="figure">
                            <h2 className="post-title">Title or username</h2>
                            <p className="post-words">>post</p>
                        </figure>
                        <img className="img" alt src='http://www.gradweek.com/images/hawaii-activity-001.jpg' />
                    </article>

                    <article className="article">
                        <figure className="figure">
                            <h2 className="post-title">title or username</h2>
                            <p className="post-words">>post words</p>
                        </figure>
                        <img className="img" alt src='http://www.hawaiiactive.com/img/video/vid-cover-507-465.jpg' />
                    </article>

                    <article className="article">
                        <figure className="figure">
                            <h2 className="post-title">title or username</h2>
                            <p className="post-words">>post </p>
                        </figure>
                        <img className="img" alt src='https://www.hawaiidiscount.com/Portals/0/hawaii-adventure-act.jpg' />
                    </article>

                    <article className="article">
                        <figure className="figure">
                            <h2 className="post-title">title or username</h2>
                            <p className="post-words">>post </p>
                        </figure>
                        <img className="img" alt src='https://www.hawaiidiscount.com/Portals/0/hawaii-adventure-act.jpg' />
                    </article>
                </section> 





                <svg width="0" height="0">
                    <defs>
                        <clipPath id="hexagono" clipPathUnits="objectBoundingBox">
                            <p className="post-words">olygon points=".25 0, .75 0, 1 .5, .75 1, .25 1, 0 .5" </p>
                        </clipPath>
                    </defs>
                </svg>
            </div>
        </div>
</div>
    )
}

export default ActivityFeed;
