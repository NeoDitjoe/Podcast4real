export default function mmm(){
    useEffect(() => {
        const session = supabase.auth.getSession()
        setUser(session?.user)
    
        const unsubscribe = () => supabase.auth.onAuthStateChange((event, session) => {
          switch(event) {
            case 'SIGNED_IN':
              setUser(session?.user)
              
              /**
               * store the user id in a usestate then, the state is used to get spicific 
               * users data and to also store the id to the database
               */
              setUserId(session.user.id)
              
              break;
            case 'SIGNED_OUT':
              setUser(null)
              break;
            default:  
          }
        })
    
        return () => {
          unsubscribe()
        }
      }, [])
}