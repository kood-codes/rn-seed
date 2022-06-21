## Http calls

To make http calls use the exported axios instance from `utils/axios`. And use relative url path instead of the whole url.

```
import axios from '../../utils/axios';


 useEffect(() => {
    try {
      const getData = async () => {
        const { data } = (await axios.request({ url: '/getCategories' })) || {};
      };
      getData();
    } catch (err) { }
  }, []);
```

## State Management

State management is similar to redux. To get the state call useAppState() and to dispatch an action call useAppDispatch().

```
  const appState = useAppState();
  const dispatch = useAppDispatch();

  dispatch({
    type: ActionType.SOME_ACTION,
    payload: {
        businessUnitCode: extractBusinessUnitCode(user),
    },
  })
```
