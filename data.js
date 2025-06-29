var APP_DATA = {
  "scenes": [
    {
      "id": "0-kitchen",
      "name": "kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.737083672530261,
          "pitch": 0.3329463190593067,
          "rotation": 0,
          "target": "1-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-hall",
      "name": "hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.1253288947185727,
          "pitch": 0.20842030180687665,
          "rotation": 0,
          "target": "0-kitchen"
        },
        {
          "yaw": 0.13535147501747602,
          "pitch": 0.4610035570404136,
          "rotation": 0,
          "target": "2-balcony-edition-view"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-balcony-edition-view",
      "name": "balcony edition view",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6586909504289258,
          "pitch": 0.36321376968110997,
          "rotation": 0,
          "target": "3-balcony"
        },
        {
          "yaw": 3.0871903972428623,
          "pitch": 0.3640899693965416,
          "rotation": 0,
          "target": "1-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-balcony",
      "name": "balcony",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.940292445494017,
          "pitch": 0.4713891043898446,
          "rotation": 0,
          "target": "4-room"
        },
        {
          "yaw": -1.7231363056885556,
          "pitch": 0.2519509980939105,
          "rotation": 0,
          "target": "2-balcony-edition-view"
        },
        {
          "yaw": 1.6062611189476534,
          "pitch": 0.3935927231085756,
          "rotation": 7.853981633974483,
          "target": "8-balcony"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-room",
      "name": "room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.47162607103059173,
          "pitch": 0.45546640713458686,
          "rotation": 0,
          "target": "3-balcony"
        },
        {
          "yaw": -3.02799602090953,
          "pitch": 0.2506528124807055,
          "rotation": 1.5707963267948966,
          "target": "1-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-bathroom",
      "name": "bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.032447548723386,
          "pitch": 0.17343670698287283,
          "rotation": 0,
          "target": "4-room"
        },
        {
          "yaw": -2.776616926162774,
          "pitch": 0.40876610476445663,
          "rotation": 1.5707963267948966,
          "target": "7-master-room"
        },
        {
          "yaw": 3.0480921006742747,
          "pitch": 0.3989692100175777,
          "rotation": 5.497787143782138,
          "target": "1-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-master-bathroom",
      "name": "master bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.9308228465753956,
          "pitch": 0.3526871632069106,
          "rotation": 0,
          "target": "7-master-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-master-room",
      "name": "master room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.07307552082296809,
          "pitch": 0.469486948651749,
          "rotation": 0.7853981633974483,
          "target": "6-master-bathroom"
        },
        {
          "yaw": -2.6430395167364633,
          "pitch": 0.19538002427892387,
          "rotation": 0,
          "target": "8-balcony"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-balcony",
      "name": "balcony.",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.16328812873307896,
          "pitch": 0.4034658278879295,
          "rotation": 0,
          "target": "7-master-room"
        },
        {
          "yaw": -3.1080091433651305,
          "pitch": 0.3394974723208719,
          "rotation": 4.71238898038469,
          "target": "3-balcony"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "A2",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
