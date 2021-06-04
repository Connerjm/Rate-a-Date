import React from "react";

export default Avatar(props)
{
    let avatar;
    switch (props.id)
    {
        case 1://Conner
            avatar = <Avatar
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
            avatar = <Avatar
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
            avatar = <Avatar
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
            avatar = <Avatar
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
            avatar = <Avatar
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
            avatar = <Avatar
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
    }
    return avatar;
}