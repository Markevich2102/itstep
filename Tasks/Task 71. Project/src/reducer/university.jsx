const reducer = (state = {}, action) => {

    switch (action.type) {

        case "INIT":
            return {
                ...state,
                universities: action.universities,
                comments: action.comments,
                specialties: action.specialties,
                contacts: action.contacts,
                applications: action.applications,
                users: action.users,
                lastIdUniversity: action.lastIdUniversity,
                lastIdComment: action.lastIdComment,
                lastIdApplication: action.lastIdApplication,
                lastUserId: action.lastUserId,
                currentUser: action.currentUser,
                specialties1: action.specialties1,
            }

        case "SIGNUP":
            let newId = ++state.lastUserId;
            let newUser = {
                id: newId,
                login: action.user.login,
                password: action.user.password,
            };
            return {
                ...state,
                users: [...state.users, newUser],
                lastUserId: newId
            };
        case "SIGNIN":
            return {
                ...state,
                currentUser: action.login
            }

        case "APPLICATION_ADD":
            let newIdApplication = ++state.lastIdApplication;
            let newApplication = {
                id: newIdApplication,
                name: action.application.name,
                email: action.application.email,
                phone: action.application.phone,
                city: action.application.city,
                item1: action.application.item1,
                item2: action.application.item2,
                item3: action.application.item3
            };
            return {
                ...state,
                applications: [...state.applications, newApplication],
                lastIdApplication: newIdApplication
            };

        case "UNIVERSITY_COMMENTADD":
            let newIdComment = ++state.lastIdComment;
            let newComment = {
                id: newIdComment,
                universityId: action.comment.universityId,
                author: action.comment.author,
                text: action.comment.text

            };
            return {
                ...state,
                comments: [...state.comments, newComment],
                lastIdComment: newIdComment
            };
            break;
    }

    return state;
}

module.exports = reducer;