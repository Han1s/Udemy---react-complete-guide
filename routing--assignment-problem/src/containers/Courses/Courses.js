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
        console.log(this.props)
        return (
            <div>
                <Route path="/courses">
                    <h1>Amazing Udemy Courses</h1>
                    <section className="Courses">
                        {
                            this.state.courses.map( course => {
                                return (
                                    <Link 
                                        key={course.id} 
                                        to={`${this.props.match.path}/${course.id}/${course.title}`} 
                                        style={{ color: 'inherit', textDecoration: 'inherit'}}
                                        title={course.title}>
                                        <article className="Course" key={course.id}>{course.title}</article>
                                    </Link>
                                );
                            } )
                        }
                    </section>
                </Route>
                <Route path="/courses/:id/:title" component={Course}></Route>
            </div>
        );
    }
}

export default withRouter(Courses);