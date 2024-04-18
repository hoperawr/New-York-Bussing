import React from "react";
import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup,
  GeoJSON,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  const geofeature = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-73.927595, 40.625657],
        },
        properties: {
          VehicleRef: "NYCT_4614",
          PublishedLineName: "B46",
          DirectionRef: "0",
          OriginName: "FLATBUSH AV/KINGS PLAZA",
          DestinationName: "BRIDGE PLZ via UTICA",
          StartTime: "2017-06-01T02:24:19",
          EndTime: "2017-06-01T02:24:19",
          NumOfPoints: "1",
          "Point 1 geom": "MyLatLong(longitude=-73.927595, latitude=40.625657)",
          "Point 1 arrival": "at stop",
          "Point 1 dist from stop": "3",
          "Point 1 time": "2017-06-01T02:24:19",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "LineString",
          coordinates: [
            [-73.929321, 40.64182],
            [-73.930629, 40.654057],
          ],
        },
        properties: {
          VehicleRef: "NYCT_4614",
          PublishedLineName: "B46",
          DirectionRef: "0",
          OriginName: "FLATBUSH AV/KINGS PLAZA",
          DestinationName: "BRIDGE PLZ via UTICA",
          StartTime: "2017-06-01T02:33:53",
          EndTime: "2017-06-01T02:43:26",
          NumOfPoints: "2",
          "Point 1 geom": "MyLatLong(longitude=-73.929321, latitude=40.64182)",
          "Point 1 arrival": "at stop",
          "Point 1 dist from stop": "22",
          "Point 1 time": "2017-06-01T02:33:53",
          "Point 2 geom": "MyLatLong(longitude=-73.930629, latitude=40.654057)",
          "Point 2 arrival": "at stop",
          "Point 2 dist from stop": "11",
          "Point 2 time": "2017-06-01T02:43:26",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "LineString",
          coordinates: [
            [-73.953309, 40.706833],
            [-73.942819, 40.701271],
            [-73.930594, 40.690644],
          ],
        },
        properties: {
          VehicleRef: "NYCT_4614",
          PublishedLineName: "B46",
          DirectionRef: "1",
          OriginName: "WASHINGTON PLZ/LANE3",
          DestinationName: "KINGS PLAZA via UTICA",
          StartTime: "2017-06-01T03:54:33",
          EndTime: "2017-06-01T04:14:42",
          NumOfPoints: "3",
          "Point 1 geom": "MyLatLong(longitude=-73.953309, latitude=40.706833)",
          "Point 1 arrival": "< 1 stop away",
          "Point 1 dist from stop": "286",
          "Point 1 time": "2017-06-01T03:54:33",
          "Point 2 geom": "MyLatLong(longitude=-73.942819, latitude=40.701271)",
          "Point 2 arrival": "< 1 stop away",
          "Point 2 dist from stop": "169",
          "Point 2 time": "2017-06-01T04:03:33",
          "Point 3 geom": "MyLatLong(longitude=-73.930594, latitude=40.690644)",
          "Point 3 arrival": "at stop",
          "Point 3 dist from stop": "22",
          "Point 3 time": "2017-06-01T04:14:42",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "LineString",
          coordinates: [
            [-73.929823, 40.646508],
            [-73.927844, 40.627955],
            [-73.926298, 40.613534],
            [-73.921076, 40.608725],
          ],
        },
        properties: {
          VehicleRef: "NYCT_4614",
          PublishedLineName: "B46",
          DirectionRef: "1",
          OriginName: "WASHINGTON PLZ/LANE3",
          DestinationName: "KINGS PLAZA via UTICA",
          StartTime: "2017-06-01T01:44:23",
          EndTime: "2017-06-01T02:14:11",
          NumOfPoints: "4",
          "Point 1 geom": "MyLatLong(longitude=-73.929823, latitude=40.646508)",
          "Point 1 arrival": "approaching",
          "Point 1 dist from stop": "53",
          "Point 1 time": "2017-06-01T01:44:23",
          "Point 2 geom": "MyLatLong(longitude=-73.927844, latitude=40.627955)",
          "Point 2 arrival": "at stop",
          "Point 2 dist from stop": "18",
          "Point 2 time": "2017-06-01T01:53:55",
          "Point 3 geom": "MyLatLong(longitude=-73.926298, latitude=40.613534)",
          "Point 3 arrival": "at stop",
          "Point 3 dist from stop": "10",
          "Point 3 time": "2017-06-01T02:03:27",
          "Point 4 geom": "MyLatLong(longitude=-73.921076, latitude=40.608725)",
          "Point 4 arrival": "approaching",
          "Point 4 dist from stop": "55",
          "Point 4 time": "2017-06-01T02:14:11",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "LineString",
          coordinates: [
            [-73.931179, 40.66816],
            [-73.92886, 40.68187],
            [-73.932238, 40.695285],
          ],
        },
        properties: {
          VehicleRef: "NYCT_4614",
          PublishedLineName: "B46",
          DirectionRef: "0",
          OriginName: "FLATBUSH AV/KINGS PLAZA",
          DestinationName: "BRIDGE PLZ via UTICA",
          StartTime: "2017-06-01T00:04:02",
          EndTime: "2017-06-01T00:23:38",
          NumOfPoints: "3",
          "Point 1 geom": "MyLatLong(longitude=-73.931179, latitude=40.66816)",
          "Point 1 arrival": "approaching",
          "Point 1 dist from stop": "35",
          "Point 1 time": "2017-06-01T00:04:02",
          "Point 2 geom": "MyLatLong(longitude=-73.92886, latitude=40.68187)",
          "Point 2 arrival": "< 1 stop away",
          "Point 2 dist from stop": "293",
          "Point 2 time": "2017-06-01T00:14:06",
          "Point 3 geom": "MyLatLong(longitude=-73.932238, latitude=40.695285)",
          "Point 3 arrival": "approaching",
          "Point 3 dist from stop": "128",
          "Point 3 time": "2017-06-01T00:23:38",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "LineString",
          coordinates: [
            [-73.943333, 40.701577],
            [-73.929732, 40.686237],
          ],
        },
        properties: {
          VehicleRef: "NYCT_4614",
          PublishedLineName: "B46",
          DirectionRef: "1",
          OriginName: "WASHINGTON PLZ/LANE3",
          DestinationName: "KINGS PLAZA via UTICA",
          StartTime: "2017-05-31T22:23:52",
          EndTime: "2017-05-31T22:33:55",
          NumOfPoints: "2",
          "Point 1 geom": "MyLatLong(longitude=-73.943333, latitude=40.701577)",
          "Point 1 arrival": "at stop",
          "Point 1 dist from stop": "17",
          "Point 1 time": "2017-05-31T22:23:52",
          "Point 2 geom": "MyLatLong(longitude=-73.929732, latitude=40.686237)",
          "Point 2 arrival": "< 1 stop away",
          "Point 2 dist from stop": "267",
          "Point 2 time": "2017-05-31T22:33:55",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "LineString",
          coordinates: [
            [-73.929132, 40.640031],
            [-73.931413, 40.665846],
            [-73.92909, 40.639634],
          ],
        },
        properties: {
          VehicleRef: "NYCT_4614",
          PublishedLineName: "B46",
          DirectionRef: "0",
          OriginName: "FLATBUSH AV/KINGS PLAZA",
          DestinationName: "BRIDGE PLZ via UTICA",
          StartTime: "2017-05-31T18:33:43",
          EndTime: "2017-05-31T23:43:56",
          NumOfPoints: "3",
          "Point 1 geom": "MyLatLong(longitude=-73.929132, latitude=40.640031)",
          "Point 1 arrival": "< 1 stop away",
          "Point 1 dist from stop": "222",
          "Point 1 time": "2017-05-31T18:33:43",
          "Point 2 geom": "MyLatLong(longitude=-73.931413, latitude=40.665846)",
          "Point 2 arrival": "approaching",
          "Point 2 dist from stop": "67",
          "Point 2 time": "2017-05-31T18:43:46",
          "Point 3 geom": "MyLatLong(longitude=-73.92909, latitude=40.639634)",
          "Point 3 arrival": "at stop",
          "Point 3 dist from stop": "7",
          "Point 3 time": "2017-05-31T23:43:56",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "LineString",
          coordinates: [
            [-73.929321, 40.64182],
            [-73.930629, 40.654057],
            [-73.931213, 40.667804],
            [-73.929303, 40.67904],
            [-73.931011, 40.692748],
            [-73.938992, 40.699084],
            [-73.950015, 40.705315],
            [-73.959659, 40.709443],
          ],
        },
        properties: {
          VehicleRef: "NYCT_4614",
          PublishedLineName: "B46",
          DirectionRef: "0",
          OriginName: "FLATBUSH AV/KINGS PLAZA",
          DestinationName: "BRIDGE PLZ via UTICA",
          StartTime: "2017-06-01T02:33:53",
          EndTime: "2017-06-01T03:43:54",
          NumOfPoints: "8",
          "Point 1 geom": "MyLatLong(longitude=-73.929321, latitude=40.64182)",
          "Point 1 arrival": "at stop",
          "Point 1 dist from stop": "22",
          "Point 1 time": "2017-06-01T02:33:53",
          "Point 2 geom": "MyLatLong(longitude=-73.930629, latitude=40.654057)",
          "Point 2 arrival": "at stop",
          "Point 2 dist from stop": "11",
          "Point 2 time": "2017-06-01T02:43:26",
          "Point 3 geom": "MyLatLong(longitude=-73.931213, latitude=40.667804)",
          "Point 3 arrival": "approaching",
          "Point 3 dist from stop": "75",
          "Point 3 time": "2017-06-01T02:54:38",
          "Point 4 geom": "MyLatLong(longitude=-73.929303, latitude=40.67904)",
          "Point 4 arrival": "at stop",
          "Point 4 dist from stop": "25",
          "Point 4 time": "2017-06-01T03:04:42",
          "Point 5 geom": "MyLatLong(longitude=-73.931011, latitude=40.692748)",
          "Point 5 arrival": "approaching",
          "Point 5 dist from stop": "103",
          "Point 5 time": "2017-06-01T03:14:15",
          "Point 6 geom": "MyLatLong(longitude=-73.938992, latitude=40.699084)",
          "Point 6 arrival": "at stop",
          "Point 6 dist from stop": "25",
          "Point 6 time": "2017-06-01T03:23:50",
          "Point 7 geom": "MyLatLong(longitude=-73.950015, latitude=40.705315)",
          "Point 7 arrival": "< 1 stop away",
          "Point 7 dist from stop": "168",
          "Point 7 time": "2017-06-01T03:34:21",
          "Point 8 geom": "MyLatLong(longitude=-73.959659, latitude=40.709443)",
          "Point 8 arrival": "at stop",
          "Point 8 dist from stop": "8",
          "Point 8 time": "2017-06-01T03:43:54",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "LineString",
          coordinates: [
            [-73.957353, 40.708231],
            [-73.941695, 40.70059],
            [-73.930364, 40.689497],
            [-73.930452, 40.675872],
            [-73.931591, 40.663766],
          ],
        },
        properties: {
          VehicleRef: "NYCT_4614",
          PublishedLineName: "B46",
          DirectionRef: "1",
          OriginName: "WASHINGTON PLZ/LANE3",
          DestinationName: "KINGS PLAZA via UTICA",
          StartTime: "2017-06-01T00:54:21",
          EndTime: "2017-06-01T01:34:19",
          NumOfPoints: "5",
          "Point 1 geom": "MyLatLong(longitude=-73.957353, latitude=40.708231)",
          "Point 1 arrival": "< 1 stop away",
          "Point 1 dist from stop": "297",
          "Point 1 time": "2017-06-01T00:54:21",
          "Point 2 geom": "MyLatLong(longitude=-73.941695, latitude=40.70059)",
          "Point 2 arrival": "approaching",
          "Point 2 dist from stop": "48",
          "Point 2 time": "2017-06-01T01:04:05",
          "Point 3 geom": "MyLatLong(longitude=-73.930364, latitude=40.689497)",
          "Point 3 arrival": "approaching",
          "Point 3 dist from stop": "60",
          "Point 3 time": "2017-06-01T01:13:37",
          "Point 4 geom": "MyLatLong(longitude=-73.930452, latitude=40.675872)",
          "Point 4 arrival": "< 1 stop away",
          "Point 4 dist from stop": "327",
          "Point 4 time": "2017-06-01T01:24:14",
          "Point 5 geom": "MyLatLong(longitude=-73.931591, latitude=40.663766)",
          "Point 5 arrival": "at stop",
          "Point 5 dist from stop": "6",
          "Point 5 time": "2017-06-01T01:34:19",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-73.929346, 40.642058],
        },
        properties: {
          VehicleRef: "NYCT_4614",
          PublishedLineName: "B46",
          DirectionRef: "0",
          OriginName: "FLATBUSH AV/KINGS PLAZA",
          DestinationName: "BRIDGE PLZ via UTICA",
          StartTime: "2017-05-31T21:23:24",
          EndTime: "2017-05-31T21:23:24",
          NumOfPoints: "1",
          "Point 1 geom": "MyLatLong(longitude=-73.929346, latitude=40.642058)",
          "Point 1 arrival": "< 1 stop away",
          "Point 1 dist from stop": "306",
          "Point 1 time": "2017-05-31T21:23:24",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "LineString",
          coordinates: [
            [-73.926987, 40.619971],
            [-73.929346, 40.642058],
            [-73.931183, 40.668122],
            [-73.929222, 40.679118],
            [-73.934261, 40.696428],
            [-73.958015, 40.708465],
            [-73.959562, 40.709409],
          ],
        },
        properties: {
          VehicleRef: "NYCT_4614",
          PublishedLineName: "B46",
          DirectionRef: "0",
          OriginName: "FLATBUSH AV/KINGS PLAZA",
          DestinationName: "BRIDGE PLZ via UTICA",
          StartTime: "2017-05-31T21:13:22",
          EndTime: "2017-05-31T22:13:46",
          NumOfPoints: "7",
          "Point 1 geom": "MyLatLong(longitude=-73.926987, latitude=40.619971)",
          "Point 1 arrival": "< 1 stop away",
          "Point 1 dist from stop": "189",
          "Point 1 time": "2017-05-31T21:13:22",
          "Point 2 geom": "MyLatLong(longitude=-73.929346, latitude=40.642058)",
          "Point 2 arrival": "< 1 stop away",
          "Point 2 dist from stop": "306",
          "Point 2 time": "2017-05-31T21:23:24",
          "Point 3 geom": "MyLatLong(longitude=-73.931183, latitude=40.668122)",
          "Point 3 arrival": "approaching",
          "Point 3 dist from stop": "39",
          "Point 3 time": "2017-05-31T21:33:59",
          "Point 4 geom": "MyLatLong(longitude=-73.929222, latitude=40.679118)",
          "Point 4 arrival": "at stop",
          "Point 4 dist from stop": "14",
          "Point 4 time": "2017-05-31T21:43:33",
          "Point 5 geom": "MyLatLong(longitude=-73.934261, latitude=40.696428)",
          "Point 5 arrival": "< 1 stop away",
          "Point 5 dist from stop": "165",
          "Point 5 time": "2017-05-31T21:53:37",
          "Point 6 geom": "MyLatLong(longitude=-73.958015, latitude=40.708465)",
          "Point 6 arrival": "at stop",
          "Point 6 dist from stop": "27",
          "Point 6 time": "2017-05-31T22:03:43",
          "Point 7 geom": "MyLatLong(longitude=-73.959562, latitude=40.709409)",
          "Point 7 arrival": "at stop",
          "Point 7 dist from stop": "0",
          "Point 7 time": "2017-05-31T22:13:46",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "LineString",
          coordinates: [
            [-73.925787, 40.612948],
            [-73.929132, 40.640031],
            [-73.931413, 40.665846],
            [-73.930448, 40.689916],
            [-73.950967, 40.705849],
            [-73.959906, 40.709462],
            [-73.959906, 40.709462],
          ],
        },
        properties: {
          VehicleRef: "NYCT_4614",
          PublishedLineName: "B46",
          DirectionRef: "0",
          OriginName: "FLATBUSH AV/KINGS PLAZA",
          DestinationName: "BRIDGE PLZ via UTICA",
          StartTime: "2017-05-31T18:23:40",
          EndTime: "2017-05-31T19:23:31",
          NumOfPoints: "7",
          "Point 1 geom": "MyLatLong(longitude=-73.925787, latitude=40.612948)",
          "Point 1 arrival": "< 1 stop away",
          "Point 1 dist from stop": "174",
          "Point 1 time": "2017-05-31T18:23:40",
          "Point 2 geom": "MyLatLong(longitude=-73.929132, latitude=40.640031)",
          "Point 2 arrival": "< 1 stop away",
          "Point 2 dist from stop": "222",
          "Point 2 time": "2017-05-31T18:33:43",
          "Point 3 geom": "MyLatLong(longitude=-73.931413, latitude=40.665846)",
          "Point 3 arrival": "approaching",
          "Point 3 dist from stop": "67",
          "Point 3 time": "2017-05-31T18:43:46",
          "Point 4 geom": "MyLatLong(longitude=-73.930448, latitude=40.689916)",
          "Point 4 arrival": "approaching",
          "Point 4 dist from stop": "126",
          "Point 4 time": "2017-05-31T18:53:49",
          "Point 5 geom": "MyLatLong(longitude=-73.950967, latitude=40.705849)",
          "Point 5 arrival": "approaching",
          "Point 5 dist from stop": "68",
          "Point 5 time": "2017-05-31T19:03:22",
          "Point 6 geom": "MyLatLong(longitude=-73.959906, latitude=40.709462)",
          "Point 6 arrival": "approaching",
          "Point 6 dist from stop": "31",
          "Point 6 time": "2017-05-31T19:13:58",
          "Point 7 geom": "MyLatLong(longitude=-73.959906, latitude=40.709462)",
          "Point 7 arrival": "approaching",
          "Point 7 dist from stop": "31",
          "Point 7 time": "2017-05-31T19:23:31",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "LineString",
          coordinates: [
            [-73.948501, 40.704473],
            [-73.929283, 40.683994],
            [-73.931134, 40.668643],
            [-73.929358, 40.642176],
            [-73.922787, 40.609896],
            [-73.921288, 40.608914],
          ],
        },
        properties: {
          VehicleRef: "NYCT_4614",
          PublishedLineName: "B46",
          DirectionRef: "1",
          OriginName: "WASHINGTON PLZ/LANE3",
          DestinationName: "KINGS PLAZA via UTICA",
          StartTime: "2017-05-31T19:33:35",
          EndTime: "2017-05-31T23:24:13",
          NumOfPoints: "6",
          "Point 1 geom": "MyLatLong(longitude=-73.948501, latitude=40.704473)",
          "Point 1 arrival": "approaching",
          "Point 1 dist from stop": "52",
          "Point 1 time": "2017-05-31T19:33:35",
          "Point 2 geom": "MyLatLong(longitude=-73.929283, latitude=40.683994)",
          "Point 2 arrival": "at stop",
          "Point 2 dist from stop": "13",
          "Point 2 time": "2017-05-31T19:43:40",
          "Point 3 geom": "MyLatLong(longitude=-73.931134, latitude=40.668643)",
          "Point 3 arrival": "approaching",
          "Point 3 dist from stop": "78",
          "Point 3 time": "2017-05-31T19:53:43",
          "Point 4 geom": "MyLatLong(longitude=-73.929358, latitude=40.642176)",
          "Point 4 arrival": "approaching",
          "Point 4 dist from stop": "50",
          "Point 4 time": "2017-05-31T20:03:48",
          "Point 5 geom": "MyLatLong(longitude=-73.922787, latitude=40.609896)",
          "Point 5 arrival": "< 1 stop away",
          "Point 5 dist from stop": "403",
          "Point 5 time": "2017-05-31T20:13:52",
          "Point 6 geom": "MyLatLong(longitude=-73.921288, latitude=40.608914)",
          "Point 6 arrival": "at stop",
          "Point 6 dist from stop": "27",
          "Point 6 time": "2017-05-31T23:24:13",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "LineString",
          coordinates: [
            [-73.931163, 40.668333],
            [-73.929989, 40.648085],
            [-73.927905, 40.628529],
            [-73.923615, 40.610628],
          ],
        },
        properties: {
          VehicleRef: "NYCT_4614",
          PublishedLineName: "B46",
          DirectionRef: "1",
          OriginName: "WASHINGTON PLZ/LANE3",
          DestinationName: "KINGS PLAZA via UTICA",
          StartTime: "2017-05-31T22:43:58",
          EndTime: "2017-05-31T23:13:37",
          NumOfPoints: "4",
          "Point 1 geom": "MyLatLong(longitude=-73.931163, latitude=40.668333)",
          "Point 1 arrival": "approaching",
          "Point 1 dist from stop": "43",
          "Point 1 time": "2017-05-31T22:43:58",
          "Point 2 geom": "MyLatLong(longitude=-73.929989, latitude=40.648085)",
          "Point 2 arrival": "< 1 stop away",
          "Point 2 dist from stop": "229",
          "Point 2 time": "2017-05-31T22:54:02",
          "Point 3 geom": "MyLatLong(longitude=-73.927905, latitude=40.628529)",
          "Point 3 arrival": "approaching",
          "Point 3 dist from stop": "82",
          "Point 3 time": "2017-05-31T23:03:33",
          "Point 4 geom": "MyLatLong(longitude=-73.923615, latitude=40.610628)",
          "Point 4 arrival": "< 1 stop away",
          "Point 4 dist from stop": "510",
          "Point 4 time": "2017-05-31T23:13:37",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "LineString",
          coordinates: [
            [-73.926672, 40.617022],
            [-73.92909, 40.639634],
            [-73.930432, 40.652213],
          ],
        },
        properties: {
          VehicleRef: "NYCT_4614",
          PublishedLineName: "B46",
          DirectionRef: "0",
          OriginName: "FLATBUSH AV/KINGS PLAZA",
          DestinationName: "BRIDGE PLZ via UTICA",
          StartTime: "2017-05-31T23:34:21",
          EndTime: "2017-05-31T23:53:26",
          NumOfPoints: "3",
          "Point 1 geom": "MyLatLong(longitude=-73.926672, latitude=40.617022)",
          "Point 1 arrival": "< 1 stop away",
          "Point 1 dist from stop": "319",
          "Point 1 time": "2017-05-31T23:34:21",
          "Point 2 geom": "MyLatLong(longitude=-73.92909, latitude=40.639634)",
          "Point 2 arrival": "at stop",
          "Point 2 dist from stop": "7",
          "Point 2 time": "2017-05-31T23:43:56",
          "Point 3 geom": "MyLatLong(longitude=-73.930432, latitude=40.652213)",
          "Point 3 arrival": "at stop",
          "Point 3 dist from stop": "29",
          "Point 3 time": "2017-05-31T23:53:26",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "LineString",
          coordinates: [
            [-73.944475, 40.702219],
            [-73.959731, 40.709469],
          ],
        },
        properties: {
          VehicleRef: "NYCT_4614",
          PublishedLineName: "B46",
          DirectionRef: "0",
          OriginName: "FLATBUSH AV/KINGS PLAZA",
          DestinationName: "BRIDGE PLZ via UTICA",
          StartTime: "2017-06-01T00:34:14",
          EndTime: "2017-06-01T00:44:16",
          NumOfPoints: "2",
          "Point 1 geom": "MyLatLong(longitude=-73.944475, latitude=40.702219)",
          "Point 1 arrival": "at stop",
          "Point 1 dist from stop": "13",
          "Point 1 time": "2017-06-01T00:34:14",
          "Point 2 geom": "MyLatLong(longitude=-73.959731, latitude=40.709469)",
          "Point 2 arrival": "at stop",
          "Point 2 dist from stop": "15",
          "Point 2 time": "2017-06-01T00:44:16",
        },
      },
    ],
  };
  return (
    <div
      style={{
        height: "75vh",
        width: "75vw",
        zIndex: 3,
        position: "relative",
      }}
    >
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: 536, width: 536 }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <GeoJSON key="geofeature" data={geofeature} />
      </MapContainer>
    </div>
  );
};

export default Map;
