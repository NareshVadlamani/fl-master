export const baseUrl = "http://shark-api-v2.herokuapp.com/api";

export const unitsGetAllUnitsListUrl = `https://qcaefqcyp9.execute-api.ap-south-1.amazonaws.com/prod/fetchunitsall`;

export const rolesGetAllRolesListUrl = `${baseUrl}/role/fetch/all`;

export const designationsGetAllDesignationsUrl = `${baseUrl}/designation/fetch/all`;

export const equipmentGetAllEquipmentUrl = `${baseUrl}/equipment/fetch/all`;

export const notificationsGetAllUrl = `https://qcaefqcyp9.execute-api.ap-south-1.amazonaws.com/prod/fetchnotification`;
export const dailyNotificationsGetAllUrl = `https://qcaefqcyp9.execute-api.ap-south-1.amazonaws.com/prod/fetchnotificationtodays`;

// http://shark-api-v2.herokuapp.com/api/notification/fetch/todays

export const zonesGetAllZoneUrl = `https://qcaefqcyp9.execute-api.ap-south-1.amazonaws.com/prod/fetchzoneall`;

export const hodGetAllHodUrl = `https://qcaefqcyp9.execute-api.ap-south-1.amazonaws.com/prod/fetchhodsall`;

export const scheduleWipUrl = `${baseUrl}/wip/create`;

export const updateWipUrl = `${baseUrl}/wip/update`;

export const deleteWipUrl = `${baseUrl}/delete`;

export const zoneGetWIPdetailsUrl = `${baseUrl}/wip/fetch/by-zone-id`;

export const zoneUpdateWIPUrl = `${baseUrl}/wip/update`;
