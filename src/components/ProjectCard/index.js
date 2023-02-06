import React from "react";
import "./style.css";

function ProjectCard(props) {
    return (
        // <div className="card">
        //     <div className="img-container">
        //         <img alt={props.name} src={props.image} />
        //     </div>
        //     <div className="content">
        //         <ul>
        //             <li>
        //                 <strong>Name:</strong> {props.name}
        //             </li>
        //             <li>
        //                 <strong>Description:</strong> {props.description}
        //             </li>
        //             <li>
        //                 <strong>Location:</strong> {props.location}
        //             </li>
        //         </ul>
        //     </div>
        <div>
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src={props.image} ></img>
                <div class="card-body">
                    <ul>
                        <li>
                            <strong>Name:</strong> {props.name}
                        </li>
                        <li>
                            <strong>Description:</strong> {props.description}
                        </li>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </ul>
                </div>
            </div>
        </div>


    );
}

export default ProjectCard;
