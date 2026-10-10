import { Page, State } from '../components/Page';
import { useApi } from '../hooks/useApi';
import { api } from '../lib/api';
import type { Submission } from '../types'; import { useState } from 'react';
 export default function Admin() {
     const x = useApi<Submission[]>('/submissions');
     const [msg, setMsg] = useState('');
     async function moderate(id: string, status: 'approved' | 'rejected')
      {
         try
         { await api.patch(`/submissions/${id}/status`, { status });
          setMsg(`Submission ${status}.`); location.reload()
        } catch (e: any)
        { setMsg(e.response?.data?.message || 'Action failed')

         }
         } return <Page title="Admin Moderation">
            <p className="mb-5 text-muted">Rules: pending → approved/rejected; approved → published. Invalid transitions are rejected by the API.</p>
            {msg && <div className="mb-4 rounded-lg bg-green-500/10 p-3 text-green-300">{msg}
            </div>}<State loading={x.loading} error={x.error} empty={!x.loading && !x.error && !x.data?.length} />
            <div className="space-y-4">{x.data?.filter(s => s.status === 'pending').map(s => <article className="card" key={s._id}>
                <h2 className="font-bold">{s.title}</h2>
                <p className="mt-2 text-muted">{s.content}</p>
                <div className="mt-4 flex gap-2">
                    <button onClick={() => moderate(s._id, 'approved')} className="btn btn-primary">Approve</button>
                    <button onClick={() => moderate(s._id, 'rejected')} className="btn btn-secondary">Reject</button>
                    </div>
                    </article>
                    )
                    }
                    </div>
                    </Page>
                    }
