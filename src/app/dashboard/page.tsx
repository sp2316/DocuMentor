import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { KindeUser } from '@kinde-oss/kinde-auth-nextjs/types';
import { redirect } from 'next/navigation';
import { useState,useEffect } from 'react';

const Page = async () => {

	const { getUser } = getKindeServerSession();

	const user = await getUser();
    
    if(!user || !user.id){
            redirect('/auth-callback?origin=dashboard')
    }
    
    if (user){
        return <div>hello {user.email}</div>;
    }
   
};

export default Page;
