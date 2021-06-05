import React from "react";
import Avatar from "avataaars";

export default function Avatars(props)
{
    let component;
    switch (props.component)
    {
        case "Conner"://Conner
            component = <Avatar
                avatarStyle='Circle'
                topType='ShortHairTheCaesar'
                accessoriesType='Prescription02'
                hairColor='BrownDark'
                facialHairType='BeardMajestic'
                facialHairColor='BrownDark'
                clotheType='BlazerShirt'
                eyeType='Happy'
                eyebrowType='RaisedExcited'
                mouthType='Smile'
                skinColor='Pale'
            />;
            break;
        case "Rikio"://Rikio
            component = <Avatar
                avatarStyle='Circle'
                topType='ShortHairShortCurly'
                accessoriesType='Prescription02'
                hairColor='BrownDark'
                facialHairType='BeardLight'
                facialHairColor='BrownDark'
                clotheType='ShirtVNeck'
                clotheColor='White'
                eyeType='Squint'
                eyebrowType='DefaultNatural'
                mouthType='Eating'
                skinColor='Tanned'
            />
            break;
        case "Kay"://Kay
            component = <Avatar
                avatarStyle='Circle'
                topType='LongHairStraight2'
                accessoriesType='Round'
                hairColor='BlondeGolden'
                facialHairType='Blank'
                clotheType='GraphicShirt'
                clotheColor='PastelRed'
                graphicType='Diamond'
                eyeType='Happy'
                eyebrowType='RaisedExcited'
                mouthType='Default'
                skinColor='Pale'
            />
            break;
        case "Corban"://Corban
            component = <Avatar
                avatarStyle='Circle'
                topType='ShortHairShortRound'
                accessoriesType='Blank'
                hairColor='Black'
                facialHairType='BeardLight'
                facialHairColor='Black'
                clotheType='ShirtCrewNeck'
                clotheColor='White'
                eyeType='Default'
                eyebrowType='DefaultNatural'
                mouthType='Default'
                skinColor='Pale'
            />;
            break;
        case "Danielle"://Danielle
            component = <Avatar
                avatarStyle='Circle'
                topType='LongHairStraightStrand'
                accessoriesType='Blank'
                hairColor='BrownDark'
                facialHairType='Blank'
                clotheType='Hoodie'
                clotheColor='Heather'
                eyeType='Happy'
                eyebrowType='RaisedExcitedNatural'
                mouthType='Smile'
                skinColor='Pale'
            />;
            break;
        case "Megan"://Megan
           component = <Avatar
                avatarStyle='Circle'
                topType='LongHairCurvy'
                accessoriesType='Blank'
                hairColor='Blonde'
                facialHairType='Blank'
                clotheType='ShirtVNeck'
                clotheColor='PastelYellow'
                eyeType='Default'
                eyebrowType='DefaultNatural'
                mouthType='Default'
                skinColor='Pale'
            />;
            break;
        default:
            component = <p>Something went wrong!</p>
            break;
    }
    return component;
}