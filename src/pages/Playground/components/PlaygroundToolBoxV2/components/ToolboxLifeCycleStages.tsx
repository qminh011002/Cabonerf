import { ToolboxDispatchType } from '@/@types/dispatch.type';
import LifeCycleStagesApis from '@/apis/lifeCycleStages.apis';
import { ToolboxContext } from '@/pages/Playground/components/PlaygroundToolBoxV2/context/toolbox.context';
import { CreateCabonerfNodeReqBody } from '@/schemas/validation/nodeProcess.schema';
import socket from '@/socket.io';
import { useQuery } from '@tanstack/react-query';
import DOMPurify from 'dompurify';
import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ToolboxLifeCycleStages() {
	const data = useParams();

	const { dispatch } = useContext(ToolboxContext);

	const lifeCycleStagesQuery = useQuery({
		queryKey: ['life-cycle-stage'],
		queryFn: LifeCycleStagesApis.prototype.getAllLifeCycleStages,
		staleTime: 60_000 * 60,
	});

	useEffect(() => {
		if (lifeCycleStagesQuery.isFetching) {
			dispatch({ type: ToolboxDispatchType.LOADING_TOOLBOX, payload: true });
		} else {
			dispatch({ type: ToolboxDispatchType.LOADING_TOOLBOX, payload: false });
		}
	}, [lifeCycleStagesQuery.isFetching, dispatch]);

	const addNewNode = (payload: { lifeCycleStageId: string }) => () => {
		// Get properties of screen
		const screenWidth = window.innerWidth;
		const screenHeight = window.innerHeight;

		// Create new node
		const newNode: CreateCabonerfNodeReqBody = {
			projectId: data.pid as string,
			lifeCycleStageId: payload.lifeCycleStageId,
			position: {
				x: Math.floor(screenWidth / 2 - 400 + Math.random() * 300),
				y: Math.floor(screenHeight / 2 - 400 + Math.random() * 300),
			},
			type: 'process',
		};

		//Emit event to Nodebased Server
		socket.emit('gateway:cabonerf-node-create', { data: newNode, projectId: data.pid });
	};

	return (
		<div className="w-[300px]">
			<header className="mb-5">
				<h2 className="mb-3 text-lg font-semibold">Life Cycle Stage</h2>
				<p className="text-sm text-gray-600">
					Customize the Life Cycle Stage by selecting relevant components to tailor the assessment to specific requirements.
				</p>
			</header>

			<section className="grid grid-cols-3 gap-5">
				{lifeCycleStagesQuery.data?.data.data.map((item) => (
					<button key={item.iconUrl} onClick={addNewNode({ lifeCycleStageId: item.id })} className="flex flex-col items-center">
						<div className="relative aspect-square w-full rounded-lg bg-gray-100">
							<div
								className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
								dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item.iconUrl) }}
							/>
						</div>
						<span className="mt-1 text-center text-xs font-medium text-gray-700">{item.name}</span>
					</button>
				))}
			</section>
		</div>
	);
}

export default React.memo(ToolboxLifeCycleStages);
