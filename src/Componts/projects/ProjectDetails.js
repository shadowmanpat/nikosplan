import React from 'react'

const ProjectDetails = (props) => {
    // console.log(props)
    const  id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <div className="card-title">Project Title - {id}</div>
                    <p>Loem ipeum to onoma moy enia kfjas kei eimai to kalytero paidi kai mathianw react redux firebase</p>
                </div>
                <div className="card-action grey.lighten-4 grey-text">
                    <div>Posted by Shadowman</div>
                    <div>28 septemvri</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails