import React from "react";

import Stars from "./Stars";
import Comment from "./Comment";
import Comments from "./Comments";
import Date from "./Date";
import DateListItem from "./DateListItem";
import DateList from "./DateList";
import MetaTags from "./MetaTags";
import Avatars from "./Avatars";

export default function TESTING(props)
{
    let component;

    switch (props.component)
    {
        case "Stars":
            component = <Stars currentRating={4}/>;
            break;
        case "Comment":
            component = <Comment
                title="This date sucks"
                currentRating={4}
                comment="Legit this place is awful. Too loud, too expensive, not even fun."
                userthumbnail="TODO"
                username="OHreallynow"
                date="06/56/2020"
            />;
            break;
        case "Comments":
            component = <Comments comments={[{title:"Garbage", currentRating:2, comment:"Trashy place.", userthumbnail:"TODO", username:"ThisisaTest", date:"07/05/2021"}, {title:"Very nice.", currentRating:5, comment:"Nice place.", userthumbnail:"TODO", username:"NormallySingle", date:"11/30/2021"}]}/>;
            break;
        case "Date":
            component = <Date
                title="Studio Ghibli Marathon"
                currentRating={5}
                username="MiyazakiFan94"
                description="Easy cute and fun date. Pick a place, grab takeout, and watch lots of good movies."
                comments={[{title:"Cute AF", currentRating:5, comment:"Agreed. Such a flexible and cute date.", userthumbnail:"TODO", username:"WhyGoOut", date:"02/15/2021"}]}
            />;
            break;
        case "DateListItem":
            component = <DateListItem
                image="TODO"
                title="Afternoon at Point Ruston"
                location="Ruston Way"
                category="Chill"
                tags={["Movies", "Bars", "Resturaunts"]}
                description="Lots to do and lots of nice places to go. All on the waterfront of the Pudget Sound."
                currentRating={5}
            />;
            break;
        case "DateList":
            component = <DateList
                dates={[{image:"TODO", title:"Seattle Waterfront", location:"Seattle", category:"Romantic", tags:["Outdoors", "Cheap"], description:"Walk the waterfront and see the sights. Can spend as much or as little as you'd like.", currentRating:5}, {image:"TODO", title:"Comicon", location:"Seattle", category:"Fun", tags:["Indoors", "Public", "Expensive"], description:"Perfect laidback date for nerds. A tad expensive though.", currentRating:4}]}
            />;
            break;
        case "MetaTags":
            component = <MetaTags
                type="tag"
                content="Outdoors"
            />;
            break;
        case "Avatars":
            component = <React.Fragment>
                <Avatars id={1} />
                <Avatars id={2} />
                <Avatars id={3} />
                <Avatars id={4} />
                <Avatars id={5} />
                <Avatars id={6} />
            </React.Fragment>
            break;
        default:
            component = <p>No Component Found</p>;
            break;
    }
    
    return component;
}