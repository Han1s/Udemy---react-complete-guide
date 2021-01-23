import React, { Component } from 'react';
import Course from '../Course/Course';
import { Switch, Route, Link, withRouter } from 'react-router-dom';

import './Courses.css';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }

    render () {
        return (
            <div>
                <Switch>
                    <Route exact path="/courses">
                        <h1>Amazing Udemy Courses</h1>
                        <section className="Courses">
                            {
                                this.state.courses.map( course => {
                                    return (
                                        <Link key={course.id} to={`courses/${course.id}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                                            <article className="Course" key={course.id}>{course.title}</article>
                                        </Link>
                                    );
                                } )
                            }
                        </section>
                    </Route>
                    <Route path="/courses/:id" component={Course}></Route>
                </Switch>
            </div>
        );
    }
}

export default withRouter(Courses);