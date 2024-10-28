import PlaygroundActionToolbar from '@/pages/Playground/components/PlaygroundActionToolbar';
import PlaygroundControls from '@/pages/Playground/components/PlaygroundControls';
import PlaygroundHeader from '@/pages/Playground/components/PlaygroundHeader';
import PlaygroundToolBoxV2 from '@/pages/Playground/components/PlaygroundToolBoxV2';
import StickyNode from '@/pages/Playground/customs/StickyNode';
import {
	applyNodeChanges,
	Background,
	BackgroundVariant,
	MiniMap,
	Node,
	NodeChange,
	NodeTypes,
	Panel,
	Position,
	ReactFlow,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { debounce } from 'lodash';
import React, { useCallback, useState } from 'react';

const customNode: NodeTypes = {
	'sticky-node': StickyNode,
};

const nds: Node[] = [
	{
		id: '123',
		data: {
			name: '123',
			color: 'blue',
		},
		position: {
			x: 700,
			y: 450,
		},
		type: 'sticky-node',
		sourcePosition: Position.Right,
		selectable: true,
		draggable: true,
	},
];

const debouncedLog = debounce((id: string, x, y) => {
	alert(`id:${id}, x: ${x}, y: ${y}`);
}, 1000);

export default function Playground() {
	const [nodes, setNodes] = useState<Node[]>(nds);

	const onNodeChange = useCallback((changes: NodeChange<Node>[]) => {
		setNodes((nds) => applyNodeChanges(changes, nds));

		changes.forEach((change) => {
			if (change.type === 'position') {
				debouncedLog(change.id, change.position?.x, change.position?.y);
			}
		});
	}, []);

	return (
		<React.Fragment>
			<PlaygroundHeader />
			<div className="relative h-[calc(100vh-57px)]">
				<ReactFlow nodeTypes={customNode} nodes={nodes} onNodesChange={onNodeChange}>
					<Background variant={BackgroundVariant.Dots} size={1.5} color="#d4d4d4" />
					<MiniMap pannable zoomable maskColor="#f5f5f5" nodeBorderRadius={3} />
					<PlaygroundToolBoxV2 />
					<Panel position="bottom-center">
						<PlaygroundControls />
					</Panel>
					<Panel position="top-right">
						<PlaygroundActionToolbar />
					</Panel>
				</ReactFlow>
			</div>
		</React.Fragment>
	);
}
