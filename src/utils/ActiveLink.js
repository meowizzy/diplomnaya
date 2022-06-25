export const linkActiveClassName = (location,navLink, parent_link_order, default_classname, active_classname) => {
    const currentParentPath = location.pathname.split("/")[parent_link_order];
    const isParentLinkActive = currentParentPath === navLink;

    if (isParentLinkActive) return active_classname;
    return default_classname;
};

export const VisibleBackButton = (location, navLink, parent_link_order) => {
    const currentParentPath = location.pathname.split("/")[parent_link_order];
    const isParentLinkActive = currentParentPath === navLink;

    if (isParentLinkActive) return true;
    return false;
};