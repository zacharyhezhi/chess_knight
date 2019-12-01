import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChessKnight, faDotCircle } from '@fortawesome/free-solid-svg-icons';
import './Icon.scss';

const Destination = () => {
    return <FontAwesomeIcon icon={faDotCircle} className="icon"/>
}

const DestinationWhite = () => {
    return <FontAwesomeIcon icon={faDotCircle} className="icon icon--white"/>
}

const Knight = () => {
    return <FontAwesomeIcon icon={faChessKnight} className="icon"/>
}

const KnightWhite = () => {
    return <FontAwesomeIcon icon={faChessKnight} className="icon icon--white"/>
}


export {
    Destination,
    Knight,
    KnightWhite,
    DestinationWhite,
};