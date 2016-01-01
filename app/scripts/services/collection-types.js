'use strict';

/**
 * @ngdoc service
 * @name kal3aSearchApp.collectionTypes
 * @description
 * # collectionTypes
 * Constant in the kal3aSearchApp.
 */
angular.module('kal3aSearchApp')
    .constant('collectionTypes', {
        "bangpound_castle.types": {
            "Bangpound.Bundle.TwitterStreamingBundle.CouchDocument.AtomEntry": "Kal3a: Twitter (Jul 2013 to current)",
            "Rshief.MigrationBundle.CouchDocument.CollectorAtomEntry": "Twitterminer (Aug 2010 to Jul 2013)",
            "Rshief.MigrationBundle.CouchDocument.AtomEntry": "FB+Web Original (Aug 2010 to Jul 2013)",
            "Bangpound.Bundle.CastleBundle.CouchDocument.AtomEntry": "Castle",
            "Bangpound.Bundle.PubsubBundle.CouchDocument.AtomEntry": "Kal3a: FB+Web (Jul 2013 to current)"
        },
        "bangpound_castle.types.lower": {
            "bangpound.bundle.twitterstreamingbundle.couchdocument.atomentry": "Kal3a: Twitter (Jul 2013 to current",
            "rshief.migrationbundle.couchdocument.collectoratomentry": "Twitterminer (Aug 2010 to Jul 2013)",
            "rshief.migrationbundle.couchdocument.atomentry": "FB+Web Original (Aug 2010 to Jul 2013)",
            "bangpound.bundle.castlebundle.couchdocument.atomentry": "Castle",
            "bangpound.bundle.pubsubbundle.couchdocument.atomentry": "Kal3a: FB+Web (Jul 2013 to current)"
        }
    });
