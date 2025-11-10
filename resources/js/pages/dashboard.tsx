import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { SharedData, type BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import PostEditor from './_components/PostEditor';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];

export default function Dashboard() {
    const  {auth}= usePage<SharedData>().props

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="mx-auto max-w-2xl">
                <PostEditor
                    user={auth.user}
                    onPostCreated={()=>{}}
                />
            </div>
        </AppLayout>
    );
}
