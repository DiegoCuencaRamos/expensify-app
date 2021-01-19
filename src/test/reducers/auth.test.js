import authReducer from '../../reducers/auth';

test('should set uid user for login', () => {
    const action = {
        type: 'LOGIN',
        uid: '123asd'
    };
    const state = authReducer({}, action);
    expect(state.uid).toBe(action.uid);
});

test('should clear uid for loguot', () => {
    const action = {
        type: 'LOGOUT'
    };
    const state = authReducer({ uid:'anything' }, action);
    expect(state).toEqual({});
});