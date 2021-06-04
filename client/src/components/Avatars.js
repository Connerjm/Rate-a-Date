import React from "react";
import Avatar from "avataaars";

export default function Avatars(props)
{
    let avatars;
    switch (props.id)
    {
        case 1://Conner
            avatars = <Avatar
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
        case 2://Rikio
            avatars = <Avatar
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
            />
            break;
        case 3://Kay
            avatars = <Avatar
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
        case 4://Corban
            avatars = <Avatar
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
            break
        case 5://Danielle
            avatars = <Avatar
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
        case 6://Megan
            avatars = <Avatar
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
            avatars = <p>Something went wrong!</p>
            break;
    }
    return avatars;
}